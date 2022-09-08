import '../assets/css/basket.css';

function Cart({items, remove}) {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "0";
    };

    // Calculate total price
    const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.qty * currentValue.price, 0);
    const taxa = totalPrice * 0.5;

    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="container" id="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Cardapio</h3>
                        <hr/>
                        <div className="table-responsive" id="table">
                            <table className="table">
                                <thead id="table-header">
                                <tr>
                                    <th>Item</th>
                                    <th>Quantidade</th>
                                    <th>Preço</th>
                                    <th>Remover</th>
                                </tr>
                                </thead>
                                <tbody id="table-body">
                                {items.map((churros) => (
                                    <tr key={churros.id}>
                                        <td><strong>{churros.name}</strong></td>
                                        <td>{churros.qty}</td>
                                        <td>${churros.price}</td>
                                        <td id="remove">
                                            <i onClick={() => remove(churros)} className="far fa-trash-alt"/>
                                        </td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Sair</h3>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <p className="lead">Subtotal</p>
                            <p className="lead">${totalPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>TAXA</p>
                            <p>${taxa}</p>
                        </div>
                        <hr/>
                        <button className="btn btn-success d-flex justify-content-between align-items-baseline"
                                id="checkout" type="button">Sair<span
                            className="badge bg-success">${totalPrice + taxa}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
