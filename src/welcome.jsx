import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <>
      <div className="usermenu">
        <img src="" alt="your hotel logo here" />
        <label className="label" htmlFor="username">
          <input
            className="Uname"
            type="text"
            placeholder="Enter your name"
            onFocus="this.placeholder=''"
            onBlur="this.placeholder='Enter your name'"
          />
          <hr />
        </label>
        <select className="table-selection" aria-label="Default select example">
          <option defaultValue={"0"}>Table NO.</option>
          <option value="1">A1</option>
          <option value="2">A2</option>
          <option value="3">A3</option>
          <option value="4">B1</option>
          <option value="5">B2</option>
          <option value="6">B3</option>
          <option value="7">C1</option>
          <option value="8">C2</option>
          <option value="9">C3</option>
        </select>
        <button className="submit">Submit</button>
      </div>
    </>
  );
}
export default Welcome;
