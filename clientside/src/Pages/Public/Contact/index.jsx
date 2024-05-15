const Contact = () => {
    return (
        <div>
            <h2>Nous contacter</h2>
            <form action="/" method="post">
            
                <div><label htmlFor="/">Nom</label><input type="text" name="name" id="name" required placeholder="Rentrez votre nom" /></div>
                <div><label htmlFor="/">Adresse mail</label><input type="email" name="email" id="email" required placeholder="Rentrez votre adresse e-mail" /></div>
                <div><label htmlFor="/">Titre</label><input type="text" name="title" id="title" required placeholder="Sujet de votre message" maxLength={100} /></div>
                <div><label htmlFor="/">Message</label><textarea name="content" id="content" required placeholder="Expliquez votre message"></textarea></div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
};

export default Contact;