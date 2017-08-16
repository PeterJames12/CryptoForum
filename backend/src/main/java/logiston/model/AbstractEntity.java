package logiston.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @author Igor Hnes on 8/14/17.
 */
@Data
@NoArgsConstructor
@MappedSuperclass
@JsonInclude(JsonInclude.Include.NON_NULL)
public abstract class AbstractEntity {

    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", unique = true, nullable = false)
    protected Long id;

    @Version
    protected Long version;

    protected AbstractEntity(final Long id) {
        this.id = id;
    }

    public String toString() {
        return String.format("%s [id=%d]", getClass().getSimpleName(), id);
    }
}
