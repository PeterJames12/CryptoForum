package logiston.auth.config;

import logiston.auth.StatelessAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.Http401AuthenticationEntryPoint;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Application security configuration.
 */
@Configuration
@EnableWebSecurity
@Order(1)
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final StatelessAuthenticationFilter statelessAuthenticationFilter;

    @Autowired
    public SecurityConfig(UserDetailsService userDetailsService,
                          StatelessAuthenticationFilter statelessAuthenticationFilter) {
        super(true);
        this.userDetailsService = userDetailsService;
        this.statelessAuthenticationFilter = statelessAuthenticationFilter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        Http401AuthenticationEntryPoint unauthorizedHandler =
                new Http401AuthenticationEntryPoint("'Bearer token_type=\"JWT\"'");

        http
                .csrf().disable()

                // don't create session
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

                // custom JWT based security filter
                .addFilterBefore(statelessAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)

                // send an 401 unauthorized
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()

                // disable page caching
                .headers().cacheControl();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override
    protected UserDetailsService userDetailsService() {
        return this.userDetailsService;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    /**
     * Prevent StatelessAuthenticationFilter will be added to Spring Boot filter chain.
     * Only Spring Security must use it.
     */
    @Bean
    public FilterRegistrationBean registration(StatelessAuthenticationFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean(filter);
        registration.setEnabled(false);
        return registration;
    }
}
