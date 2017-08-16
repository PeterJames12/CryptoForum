package logiston.repositiry;

import logiston.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Igor Hnes on 8/15/17.
 */
public interface TopicRepository extends JpaRepository<Topic, Long> {


}
