package logiston.service.impl;

import logiston.auth.PasswordEncoder;
import logiston.model.User;
import logiston.exception.RequestException;
import logiston.exception.code.ErrorCode;
import logiston.repositiry.UserRepository;
import logiston.service.EmailBuilder;
import logiston.service.EmailService;
import logiston.service.UserService;
import logiston.service.impl.email.RecoverBuilderImpl;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.util.List;

/**
 * @author Igor Hnes on 8/12/17.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    private EmailBuilder<User> emailStrategy = new RecoverBuilderImpl();

    /**
     * {@inheritDoc}.
     */
    @Override
    public User create(User user) throws RequestException {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RequestException(ErrorCode.USER_EXISTS, "User already exists");
        }
        return userRepository.save(user);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public User update(User user) throws RequestException {
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User getUserByUserEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public User findById(Long id) {
        return userRepository.findOne(id);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public void changePassword(String email) {
        Assert.notNull(email, "email must not be null");
        User user = userRepository.findByEmail(email);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String password = user.getPassword();
        String encodedPassword = encoder.encode(password);
        user.setPassword(encodedPassword);
        val message = this.emailStrategy.buildMessage(user);
        emailService.sendMessage(message);
        userRepository.saveAndFlush(user);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public void deleteUser(Long userId) {
        userRepository.delete(userId);
    }

    /**
     * {@inheritDoc}.
     */
    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }
}
