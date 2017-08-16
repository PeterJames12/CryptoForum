package logiston.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.validator.constraints.Email;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * User entity.
 *
 * @author Igor Hnes on 8/14/17.
 */
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user")
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = false)
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY, isGetterVisibility = JsonAutoDetect.Visibility.ANY, getterVisibility = JsonAutoDetect.Visibility.ANY)
public class User extends AbstractEntity implements Serializable {

    private static final int MIN_NAME_LENGTH = 2;
    private static final int MAX_NAME_LENGTH = 40;
    private static final int MIN_PASSWORD_LENGTH = 6;
    private static final int MAX_PHONE_LENGTH = 20;
    private static final int MIN_PHONE_LENGTH = 3;

    @NotNull(message = "User have to have first name")
    @Size(min = MIN_NAME_LENGTH, max = MAX_NAME_LENGTH, message = "Size of first name has to be between 3 and 30")
    @Column(name = "first_name", length = MAX_NAME_LENGTH, nullable = false, unique = true)
    private String firstName;

    @NotNull(message = "User have to have last name")
    @Size(min = MIN_NAME_LENGTH, max = MAX_NAME_LENGTH, message = "Size of last name has to be between 3 and 30")
    @Column(name = "last_name", length = MAX_NAME_LENGTH, nullable = false, unique = true)
    private String lastName;

    @NotNull(message = "User has to have password")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password", nullable = false, unique = true)
    private String password;

    @NotNull(message = "User have to have email")
    @Email
    @Column(name = "email", length = MAX_NAME_LENGTH, nullable = false, unique = true)
    private String email;

    @NotNull(message = "User have to have role")
    @Column(name = "role", length = MAX_NAME_LENGTH, nullable = false, unique = true)
    private Role role;
}
