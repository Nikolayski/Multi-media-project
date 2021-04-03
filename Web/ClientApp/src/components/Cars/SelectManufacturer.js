import React, { Component } from 'react';

export default class SelectManufacturer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select className="select-manufacturer"  onChange={this.props.change} name="manufacturer">
                <option value="error">Choose brand</option>
                <option value="all">Manufacturers:</option>
                <option value="alfaRomeo">Alfa Romeo</option>
                <option value="audi">Audi</option>
                <option value="bentley">Bentley</option>
                <option value="bmw">Bmw</option>
                <option value="bugatti">Bugatti</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="citroen">Citroen</option>
                <option value="dacia">Dacia</option>
                <option value="fiat">Fiat</option>
                <option value="ford">Ford</option>
                <option value="jeep">Jeep</option>
                <option value="kia">Kia</option>
                <option value="lada">Lada</option>
                <option value="lexus">Lexus</option>
                <option value="maserati">Maserati</option>
                <option value="maybach">Maybach</option>
                <option value="mazda">Mazda</option>
                <option value="mcLaren">McLaren</option>
                <option value="mercedes">Mercedes</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="nissan">Nissan</option>
                <option value="opel">Opel</option>
                <option value="peugeot">Peugeot</option>
                <option value="renault">Renault</option>
                <option value="rover">Rover</option>
                <option value="saab">Saab</option>
                <option value="seat">Seat</option>
                <option value="smart">Smart</option>
                <option value="skoda">Skoda</option>
                <option value="tesla">Tesla</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="volvo">Volvo</option>
            </select>
        )
    }
}

