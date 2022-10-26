import React from 'react';
import {
    Page,
    Navbar,
    Block,
    Button,
    Row,
    Col,
} from 'framework7-react';

const HomePage = () => {
    const [count, setCount] = React.useState(0);    //画面に表示する値
    const [value, setValue] = React.useState(0);    //計算用の変数
    const [op, setOp] = React.useState('');
    const [flag, setFlag] = React.useState(false);  //四則演算の記号が押されるとtrue

    const insertNum = (val) => {    //数字が押されたら呼び出される
        if (flag == true) { //記号が押されていたら
            setCount(val);
            setFlag(false);
        } else {    //記号が押されていなかったら
            setCount(count * 10 + val); //入力されているcountの値を10倍し押された値を入れる
        }
    }

    const insertSym = (sym) => {    //四則演算の記号が押されたときに呼び出し
        setOp(sym);
        setValue(count)
        setFlag(true);
    }

    const equal = () => {
        switch (op) {   //opに保存された記号によって計算する
            case '+':
                setCount(value + count);
                break;
            case '-':
                setCount(value - count);
                break;
            case '*':
                setCount(value * count);
                break;
            case '/':
                setCount(value / count);
                break;
        }
        setValue(0);
    }

    const allClear = () => {    //ACを押されたら全てを初期値に
        setCount(0);
        setValue(0);
        setOp('');
        setFlag(false);
    }

    return (
        <Page name="home">
            <Navbar title="電卓" />
            <div className="frame">{count}</div>    {/*結果表示欄*/}

            <Block>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><Button onClick={() => allClear()}>AC</Button></Col>
                </Row>
                <Row>
                    <Col><Button fill onClick={() => insertNum(7)}>7</Button></Col>
                    <Col><Button fill onClick={() => insertNum(8)}>8</Button></Col>
                    <Col><Button fill onClick={() => insertNum(9)}>9</Button></Col>
                    <Col><Button onClick={() => insertSym('/')}>÷</Button></Col>
                </Row>
                <Row>
                    <Col><Button fill onClick={() => insertNum(4)}>4</Button></Col>
                    <Col><Button fill onClick={() => insertNum(5)}>5</Button></Col>
                    <Col><Button fill onClick={() => insertNum(6)}>6</Button></Col>
                    <Col><Button onClick={() => insertSym('*')}>×</Button></Col>
                </Row>
                <Row>
                    <Col><Button fill onClick={() => insertNum(1)}>1</Button></Col>
                    <Col><Button fill onClick={() => insertNum(2)}>2</Button></Col>
                    <Col><Button fill onClick={() => insertNum(3)}>3</Button></Col>
                    <Col><Button onClick={() => insertSym('-')}>-</Button></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Button fill onClick={() => insertNum(0)}>0</Button></Col>
                    <Col><Button onClick={() => equal()}>=</Button></Col>
                    <Col><Button onClick={() => insertSym('+')}>+</Button></Col>
                </Row>
            </Block>
        </Page>
    );
}
export default HomePage;