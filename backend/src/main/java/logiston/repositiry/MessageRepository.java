package logiston.repositiry;

import logiston.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Igor Hnes on 8/15/17.
 */
public interface MessageRepository extends JpaRepository<Message, Long> {



}
