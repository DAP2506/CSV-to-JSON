import React, { useEffect, useState } from 'react'
import { CSVReader } from "react-papaparse";
import axios from 'axios';
import { UserCard } from 'react-ui-cards';
import '../CSS/Home.css'

let newAverage = [];

const Home = () => {

    const [id, setid] = useState([]);
    const [trade_type, setTradeType] = useState([]);
    const [price, setPrice] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [average, setAverage] = useState([]);
    const [fileName, setFileName] = useState('');

    let newData = [];
    let allFiles = [];
    


    const handleOnDrop = (data) => {

        // console.log(data);
        // console.log("-------------------------------------------------");

        for (let i = 0; i < data.length; i++) {
            newData.push(data[i].data);
        }
        // console.log(newData);
        // console.log("-------------------------------------------------");



        for (let i = 0; i < newData.length; i++) {
            id.push(newData[i].id);

        }
        // console.log("-------------------------       ID         ------------------------");
        // console.log(id);


        for (let i = 0; i < newData.length; i++) {
            trade_type.push(newData[i].trade_typr);

        }

        // console.log("-------------------------       TRADE_TYPE         ------------------------");
        // console.log(trade_type);

        for (let i = 0; i < newData.length; i++) {
            price.push(newData[i].price);

        }

        // console.log("-------------------------       PRICE         ------------------------");
        // console.log(price);

        for (let i = 0; i < newData.length; i++) {
            quantity.push(newData[i].quantity);

        }

        // console.log("-------------------------       QUANTITY         ------------------------");
        // console.log(quantity);


        for (let i = 0; i < newData.length; i++) {
            average.push(0);

        }

        // console.log("-------------------------       AVERAGE         ------------------------");
        // console.log(average);







    }


    const handleOnError = (err, file, inputElem, reason) => {

        console.log(err)

    }

    const handleOnRemoveFile = (data) => {
        console.log("---------------------------");
        console.log(data);
        console.log("---------------------------");

    };

    const handleOnChange = (e) => {

        setFileName({ ...fileName, [e.target.fileName]: e.target.value });
    }

    const uploadDATA = async () => {

        const res = await axios.post('http://localhost:5000/upload', {
            id: id,
            trade_type: trade_type,
            price: price,
            quantity: quantity,
            average: average,


        }).then(function (response) {
            console.log(response);
            alert("File Added Successfully");
        })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });






    }

    const DeleteAll = async () => {

        const res = await axios.delete('http://localhost:5000/delete/all');

        console.log(res);

    }

    const getAllFiles = async () => {
        const res = await axios.get('http://localhost:5000/');

        // console.log(res.data.data.files);
        allFiles = res.data.data.files;
        console.log(allFiles);




    }



    useEffect(() => {
        getAllFiles();
        // calculate();

    })




    const calculate = async () => {

        const res = await axios.put('http://localhost:5000/calculate', {
            file: allFiles[0],
        });
        console.log("CALCULATED AVERAGE VALUES ARE: ");
        console.log(res.data.data.data.average);


        let avg = res.data.data.data.average;

        // average = res.data.data.data.average ;
        for (let i = 0; i < avg.length; i++) {
            newAverage.push(avg[i]);
        }

        console.log(newAverage);


        

    }




    return (
        <div>
            <h1>Home</h1>

            <h2>Upload Your CSV FILE here</h2>
            <h5>Click and Drag Upload</h5>
            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                config={{
                    header: true
                }}
                onRemoveFile={handleOnRemoveFile}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>

            <div className='Upload-Section' >
                <form onSubmit={uploadDATA} >
                    <input type="button" name='upload' value="UPLOAD" onClick={uploadDATA} />
                </form>
                <div className="reset">
                    <input type="button" name='reset' value="RESET" onClick={DeleteAll} />
                    <input type="button" name='calculate' value="calculate" onClick={calculate} />
                </div>
            </div>


            <div className='AllFiles'>
                
                <table >
                    <thead>
                        <td>ID</td>

                        <td>Trade_Type</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Average</td>
                    </thead>
                    <tbody>
                        <td>
                            <tr>99</tr>
                            {id.map(item => <tr>{item}</tr>)}
                        </td>
                        <td>
                            <tr>BUY</tr>
                            {trade_type.map(item => <tr>{item}</tr>)}
                            
                        </td>
                        <td>
                            <tr>9</tr>
                            {quantity.map(item => <tr>{item}</tr>)}
                            
                        </td>
                        <td>
                            <tr>314</tr>
                            {price.map(item => <tr>{item}</tr>)}
                            
                        </td>
                        <td>
                            <tr>314</tr>
                            {/* {newAverage.map(item => <tr>{item}</tr>)} */}
                            
                        </td>

                    </tbody>


                </table>

            </div>







        </div>
    )
}

export default Home