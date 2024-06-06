const Contact = () => {
    return (
        <main className='flex flex-col text-center mb-2'>
            <h2 className="text-lg font-medium my-2 underline underline-offset-4">Nous contacter</h2>
            <form action="/" method="post">
            
                <div><label htmlFor="/">Nom</label>
                <input className='bg-yellow-50 rounded-lg border-2 border-yellow-400' type="text" name="name" id="name" required placeholder="Rentrez votre nom" /></div>
                <div><label htmlFor="/">Adresse mail</label>
                <input className='bg-yellow-50 rounded-lg border-2 border-yellow-400' type="email" name="email" id="email" required placeholder="Rentrez votre adresse e-mail" /></div>
                <div><label htmlFor="/">Titre</label>
                <input className='bg-yellow-50 rounded-lg border-2 border-yellow-400' type="text" name="title" id="title" required placeholder="Sujet de votre message" maxLength={100} /></div>
                <div className="flex flex-col items-center" ><label className="mr-2" htmlFor="/">Message</label>
                <textarea className='w-3/5  bg-yellow-50 rounded-lg border-2 border-yellow-400' name="content" id="content" required placeholder="Expliquez votre message"></textarea></div>
                <button className='my-4 bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:scale-105 hover:bg-black hover:text-yellow-400' type="submit">Envoyer</button>
            </form>
        </main>
    )
};

export default Contact;