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
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState(0);
    const [op, setOp] = React.useState(0);
    const [flag, setFlag] = React.useState(false);

    const onClickButton = () => {
        setCount(count + 1);
    }

    const insertNum = (val) => {
        console.log(flag);
        if (flag == true) {
            setCount(0);
            setFlag(false);
        }
        setCount(count * 10 + val);
        console.log(flag);
    }

    const insSymbol = (sym) => {
        if (flag == false) {
            setFlag(true);
        }
    }

    const allClear = () => {
        setCount(0);
        setValue(0);
    }

    return (
        <Page name="home">
            <Navbar title="電卓" />

            <div>結果表示欄{count}</div>



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
                    <Col><Button onClick={() => insSymbol('/')}>÷</Button></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => insertNum(4)}>4</Button></Col>
                    <Col><Button onClick={() => insertNum(5)}>5</Button></Col>
                    <Col><Button onClick={() => insertNum(6)}>6</Button></Col>
                    <Col><Button onClick={() => insSymbol('*')}>×</Button></Col>
                </Row>
                <Row>
                    <Col><Button onClick={() => insertNum(1)}>1</Button></Col>
                    <Col><Button onClick={() => insertNum(2)}>2</Button></Col>
                    <Col><Button onClick={() => insertNum(3)}>3</Button></Col>
                    <Col><Button onClick={() => insSymbol('-')}>-</Button></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col><Button onClick={() => insertNum()}>0</Button></Col>
                    <Col><Button>=</Button></Col>
                    <Col><Button onClick={() => insSymbol('+')}>+</Button></Col>
                </Row>
                <Button fill onClick={() => onClickButton()}>カウントアップ</Button>
            </Block>
        </Page>);
}
export default HomePage;