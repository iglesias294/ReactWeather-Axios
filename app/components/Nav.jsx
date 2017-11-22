var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var lookup = this.refs.lookup.value;
    var encodedLocation = encodeURIComponent(lookup);

    if (lookup.length > 0) {
      this.refs.lookup.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }



  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active"> Get Weather </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"> About </Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active"> Examples </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeHolder="Search Weather" ref="lookup"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
