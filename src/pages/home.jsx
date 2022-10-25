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

    const insertNum = (val) => {
        if (flag == true) { //記号が押されていたら
            setCount(val);
            setFlag(false);
        } else {
            setCount(count * 10 + val); //入力されているcountの値を10倍し押された値を入れる
        }
    }

    const insertSym = (sym) => {
        setOp(sym);
        setValue(count)
        setFlag(true);
    }

    const equal = () => {
        switch (op) {
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
    }

    const allClear = () => {
        setCount(0);
        setValue(0);
    }

    return (
        <Page name="home">
            <Navbar title="電卓" />

            結果表示欄
            <div className="frame">{count}</div>

            <Block>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><Button onClick={() => allClear()}>AC</Button></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => insertNum(7)}>7</Button></Col>
                    <Col><Button onClick={() => insertNum(8)}>8</Button></Col>
                    <Col><Button onClick={() => insertNum(9)}>9</Button></Col>
                    <Col><Button onClick={() => insertSym('/')}>÷</Button></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => insertNum(4)}>4</Button></Col>
                    <Col><Button onClick={() => insertNum(5)}>5</Button></Col>
                    <Col><Button onClick={() => insertNum(6)}>6</Button></Col>
                    <Col><Button onClick={() => insertSym('*')}>×</Button></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => insertNum(1)}>1</Button></Col>
                    <Col><Button onClick={() => insertNum(2)}>2</Button></Col>
                    <Col><Button onClick={() => insertNum(3)}>3</Button></Col>
                    <Col><Button onClick={() => insertSym('-')}>-</Button></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Button onClick={() => insertNum(0)}>0</Button></Col>
                    <Col><Button onClick={() => equal()}>=</Button></Col>
                    <Col><Button onClick={() => insertSym('+')}>+</Button></Col>
                </Row>
            </Block>
        </Page>);
}
export default HomePage;