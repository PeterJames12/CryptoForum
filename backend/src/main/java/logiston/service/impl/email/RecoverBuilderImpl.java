package logiston.service.impl.email;

import logiston.model.User;

/**
 * Implementation of <code>EmailBuilder</code> interface, that specifies how
 * to build recovery email for {@link User} entity.
 *
 * @author Igor Hnes on 8/12/17.
 */
public class RecoverBuilderImpl extends EmailBuilderImpl<User> {

    private static final String MESSAGE_SUBJECT = "Password recovery";

    @Override
    String getMessageRecipient(User user) {
        return user.getEmail();
    }

    @Override
    String getMessageBody(User user) {
        return "Dear "
                + "User"
                + "\n"
                + "You requested a password recovery to "
                + user.getEmail()
                + "\n"
                + "Your new password is: "
                + user.getPassword();
    }

    @Override
    String getMessageSubject() {
        return MESSAGE_SUBJECT;
    }
}
