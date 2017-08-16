package logiston.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * The <code>Role</code> class represents {@link User} system role.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "role")
public class Role extends AbstractEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "name")
    private String name;
}

