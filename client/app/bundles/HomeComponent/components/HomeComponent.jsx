import React from 'react';
import BasicStatInput from '../../BasicStatInput/components/BasicStatInput';
import LocaleSwitcher from '../../LocaleSwitcher/components/LocaleSwitcher';
import Home from '../../Translations/components/Home';

export default class HomeComponent extends React.Component {
  selectFieldChange = (event) => {
    this.setState({
      heroName: event.target.value
    });
  };

  render() {
    const basicStats = ['Budowa Ciała', 'Zręczność', 'Percepcja', 'Inteligencja', 'Opanowanie', 'Entropia'];
		return (
			<div>
        <LocaleSwitcher />
        <Home component='h3' />
				<select onChange={this.selectFieldChange} placeholder="Wybierz klasę">
          {this.props.name.map((name) => {
            return <option value={name}>{name}</option>;
          })}
        </select>
			</div>
		);
	}
}
