package logiston.controller;

import logiston.model.User;
import logiston.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Igor Hnes on 8/14/17.
 */
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;
    
    /**
     * Method for admin, can create {@link User} entity with any role.
     *
     * @param user json object which represents {@link User} entity.
     * @return json representation of created {@link User} entity.
     */
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User saveUser = userService.create(user);
        return new ResponseEntity<>(saveUser, HttpStatus.CREATED);
    }

    /**
     * Delete user by user id.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.OK);
    }

    /**
     * Updates {@link User} entity associated with provided id param.
     *
     * @param user user to update.
     * @return http status 201 CREATED.
     */
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User updatedUser = userService.update(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.CREATED);
    }


    /**
     * @return full list of users.
     */
    @GetMapping("/getUsers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAll();
        users.forEach(s -> System.out.println(s.getEmail()));
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    /**
     * Changes {@link User} password.
     *
     * @param recoverInfo user's recover params.
     */
    @PostMapping(value = "/changePassword")
    public void changePassword(@RequestBody RecoverInfo recoverInfo) {
        userService.changePassword(recoverInfo.email);
    }

    /**
     * Recover request.
     */
    @Value
    private static final class RecoverInfo {
        private final String email;
    }

}
