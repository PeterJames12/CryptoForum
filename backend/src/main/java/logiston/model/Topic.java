package logiston.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * @author Igor Hnes on 8/15/17.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "topic")
public class Topic extends AbstractEntity implements Serializable {

    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;


}
