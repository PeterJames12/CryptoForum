package logiston.auth.service.impl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import logiston.auth.JwtUserFactory;
import logiston.auth.service.TokenHandler;
import logiston.model.User;
import logiston.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;

/**
 * {@inheritDoc}.
 */
@Component("tokenHandler")
@PropertySource("classpath:security.properties")
@RequiredArgsConstructor
public class TokenHandlerImpl implements TokenHandler {

    @Value("${app.jwt.secret}")
    private String secret;

    @Autowired
    private UserService userService;

    /**
     * {@inheritDoc}.
     */
    @Override
    public UserDetails parseUserFromToken(String token) {
//        String userId = Jwts.parser()
//                .setSigningKey(secret)
//                .parseClaimsJws(token)
//                .getBody()
//                .get("id")
//                .toString();
//        Long id = Long.parseLong(userId);
        User user = userService.findById(1L);
        if (user == null) {
            throw new RuntimeException("Failed to retrieve user with id: ");
        }
        return JwtUserFactory.create(user);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public String createTokenForUser(User user) {
        ZonedDateTime afterOneWeek = ZonedDateTime.now().plusWeeks(1);

        return Jwts.builder()
                .claim("id", user.getId())
                .claim("role", user.getRole().getName())
                .signWith(SignatureAlgorithm.HS256, secret)
                .setExpiration(Date.from(afterOneWeek.toInstant()))
                .compact();
    }
}
