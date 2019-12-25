import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';


class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  };

  /*constructor(props) {
    super(props);

    this.state = { manager: '' };
  }*/

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  
  onSubmit = async (event) => {
      event.preventDefault();

      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Waiting on transaction success...' });

      await lottery.methods.enter().send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')
      });

      this.setState({ message: 'You have been entered!' });
  };

  onClick = async (event) => {
      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Waiting on transaction...' });

      await lottery.methods.pickWinner().send({
          from: accounts[0]
      });

      this.setState({ message: 'A winner has been picked!' });
  };


  render() {

  return (
   
    <div class="module">
       <nav>
         <a href="https//www.inblockdesign.com"><img className="home" src="home.png" alt="home icon" /></a>
    
      </nav>
      <a className="metamask" alt="metamask" href="https://metamask.io"><img src="metamask.gif"/></a>
        <h1>Block Lotto</h1>
        
        <hr />
        <h4>
        There are currently <div class="numberCircle">{this.state.players.length}</div>people entered 
        competing to win <div class="numberBox"> {web3.utils.fromWei(this.state.balance, 'ether')} </div> Ether!
        </h4>

        

        <form onSubmit={this.onSubmit}>
           <h4>Try Your Luck!</h4>
           <div>
              <label></label>
              <input 
              
                 value={this.state.value}
                 onChange={event => this.setState({ value: event.target.value })}
                 placeholder=" Enter amount of Ether..."
              />
              <br></br>
               <button class="btn">Play</button>
           </div>
           <br></br>
          
        </form>

      

        <h1>{this.state.message}</h1>

        <h4>Ok, time to pick a winner!</h4>
        <button class="btn" onClick={this.onClick}>Pick a winner!</button>

        <hr />
        <div className="centered">
        Contract Manager: <a href="https://rinkeby.etherscan.io/address/0xAf52D0807faBb16e5229D2dB7042B3862889FA82"><strong>{this.state.manager}</strong></a>.<br></br>
        Please Note: You must have  <a href="https://metamask.io">MetaMask</a> installed to play.<br></br> App currently operates on the Rinkby test network.<br>
       </br> <br></br>
       
        <div className="centered">Created by Inblock Design Pty Ltd.</div></div>
        


    </div>
  );
 }
}

export default App;
