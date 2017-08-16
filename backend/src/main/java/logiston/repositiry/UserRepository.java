package logiston.repositiry;


import logiston.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Andre on July 2017.
 */
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * @return {@link User} by email    .
     */
    User findByEmail(String email);

    /**
     * @return {@link User} by user Id.
     */
    User findById(Long id);
}
