const SortForm = () => {
    return (
        <div>
                    <section>
                <form>
                    <div>
                        <label><input type="checkbox" />serie</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />film</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />salé</label>                        
                    </div>
                    <div>
                        <label><input type="checkbox" />sucré</label>                        
                    </div>
                    <button type="submit">Trier</button>
                    <button>Plus de critères</button>
                </form>
            </section>
        </div>
    )
};

export default SortForm;