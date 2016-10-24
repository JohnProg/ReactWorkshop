 var Form = React.createClass({
        getInitialState: function () {
          return {
            value: '',
            text: '',
            disabled: true
          }
        },
        _onChangeInput : function (e) {
          this.setState({
            value: e.target.value
          });

          if (this.state.value.length !== 0 && this.state.text.length !== 0) {
            this.setState({
              disabled: false
            });
          } else {
            this.setState({
              disabled: true
            });
          }
        },
        _onChangeText : function (e) {
          this.setState({
            text: e.target.value
          });

          if (this.state.value.length !== 0 && this.state.text.length !== 0) {
            this.setState({
              disabled: false
            });
          } else {
            this.setState({
              disabled: true
            });
          }
        },
        _onSubmit: function (e) {
          e.preventDefault();
          if (this.state.value.length === 0) {
            this.setState({
              error: 'Name should be filled out!'
            });
          } else {
            $.ajax({
              url: "http://requestb.in/tivsqwti",
              method: "POST",
              data: this.state
            });
            console.log(this.state);
          }
        },
        render : function () {
          return (
            <form onSubmit={this._onSubmit}>
              <input type="text"
                     value={this.state.value}
                     onChange={this._onChangeInput}/>
               <br/>
               <br/>
               <textarea rows="5"
                         value={this.state.text}
                         onChange={this._onChangeText}></textarea>
               <br/>
               <input disabled={this.state.disabled} type="submit"/>
               {this.state.error}
            </form>
          )
        }
      }),
      HelloWorld = React.createClass({
        render : function () {
          return <div>Hello World</div>
        }
      });
      ReactDOM.render(<Form/>, document.getElementById('container'));
