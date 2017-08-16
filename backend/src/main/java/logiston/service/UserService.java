package logiston.service;


import logiston.model.User;
import logiston.exception.RequestException;

import java.util.List;

/**
 * @author Andre on July 2017.
 */
public interface UserService {

    /**
     * @param user is going to be create in db.
     */
    User create(User user) throws RequestException;

    /**
     * @param user is going to be update in db.
     */
    User update(User user) throws RequestException;

    /**
     * @return {@link User} by email.
     */
    User getUserByUserEmail(String email);

    /**
     * @return {@link User} by id.
     */
    User findById(Long id);

    /**
     * Sends to email new generated password for existed User.
     *
     * @param email email for recovering password, must not be {@literal null}.
     */
    void changePassword(String email);

    /**
     * Delete user by given user id.
     */
    void deleteUser(Long userId);

    /**
     * @return list of users.
     */
    List<User> getAll();
}
