const SortForm = () => {
    return (
        <div>
                    <section>
                <form>
                    <div>
                        <label><input type="checkbox" />Salé</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />Sucré</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />Dessert</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />Apéro</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />Diner</label>                        
                    </div>
                    <button type="submit">Trier</button>
                    <button>Plus de critères</button>
                </form>
            </section>
        </div>
    )
};

export default SortForm;