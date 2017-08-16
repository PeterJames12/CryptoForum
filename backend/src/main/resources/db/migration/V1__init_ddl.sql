CREATE TABLE public."user"
(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(66),
    password VARCHAR(255),
    role INT
);
CREATE UNIQUE INDEX user_id_uindex ON public."user" (id);