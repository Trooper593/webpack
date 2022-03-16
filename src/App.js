import React, { useState } from "react";
import AppHello from './components/hello/hello'

const productFromServer = [
    {
        id: 100,
        cnt: 1,
        max: 1
    },
    {
        id: 101,
        cnt: 1,
        max: 2
    },
    {
        id: 103,
        cnt: 1,
        max: 3
    },
    {
        id: 105,
        cnt: 1,
        max: 4
    }
];

function App() {

    let [products, setProducts] = useState(productFromServer);

    let changeCnt = (id, cnt) => {
        setProducts(products.map(pr => pr.id !== id ? pr : {...pr, cnt}));
    }

    let remove = (id) => {
        setProducts(products.filter(pr => pr.id !== id));
    }

    let tmpSaleAllBy5 = () => {

        setProducts((products) => products.map(pr => ({...pr, max: 5})));
        setProducts((products) => products.map(pr => pr.id === 100 ? pr : {...pr, cnt:44}));

    }

    let restFirst5 = () => {
        setProducts(products.map(pr => pr.id !== 100 ? pr : {
            ...pr,
            rest: 5,
            cnt: pr.cnt > 5 ? 5 : pr.cnt
        }));
    }

    let productsRows = products.map(pr => (
        <tr key={pr.id}>
            <td>
                <AppHello
                    max={pr.max}
                    cnt={pr.cnt}
                    key={pr.cnt} //вместо useEffect
                    onChange={val => changeCnt(pr.id, val)}
                />
            </td>
        </tr>
    ));

    return (
        <div className="App">
            <table>
                <tbody>
                    {productsRows}
                </tbody>
            </table>
            <button type="button" onClick={tmpSaleAllBy5}>Want all 5</button>
            <button type="button" onClick={restFirst5}>Rest item 1 = 5</button>
        </div>
    );
}

export default App;