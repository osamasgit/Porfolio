import './globals.css';

const hero = () => {
    return (
        <>
            <section style= {{ gap: '30px' }}>
                <div style={{ color: '#e8a6a8', display: 'flex', flexDirection: 'column'}}>
                    <p style={{ fontSize: '28px'}}>Hola, soy</p>
                    <h1 style={{ color: '#41e3de', fontWeight: 'blod' }}>OUSSAMA</h1>
                    <h2 style={{ fontWeight: 'blod' }}>Benhachem Gharrass</h2>
                </div>
                <div className='terminal' style={{ maxWidth: '400px', height: '200px', width: '40%', backgroundColor: '#232337', border: 'solid 0.5px #655e7eff', color: '#fff', padding: '10px', overflow: 'hidden'}}>
                    <p>$ cat about.txt</p>
                    <p>
                        <br/>&gt; FullStack Developer<br/>
                        &gt; Open to work<br/>
                        &gt; JavaScript · TypeScript · React · Next · Node · Express · MongoDB · SQL
                    </p>
                </div>
            </section>
        </>
    )
}

export default hero;