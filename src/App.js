import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
        <h2>Royal Restaurant</h2>
        <h2>11, Shaitaan Gali, Behind Kabaristan</h2>
        <h2>Khooni Street, Morbi-363 641</h2>
        <h3>Mask & Sanitizer Are Mandatory</h3>
        <h3>
          Upload RT-PCR Negative Test Report
          Or Two Dose Of Vaccine Certificate
        </h3>
        <h3>***Booking Only For Today***</h3>
        <br /><br />

        <form action="dine.php" method="get">
          <table>
            <tr>
              <td>Name:</td>
              <td><input type="text" name="name" required /><br /><br /></td>
            </tr>
            <tr>
              <td>Total Number Of Customer:</td>
              <td><input type="text" name="val" required /><br /><br /></td>
            </tr>
            <tr>
              <td>Time (12 Hours Format):</td>
              <td><input type="text" name="time" required /><br /><br /></td>
            </tr>
            <tr>
              <td>
                Upload Certificates Or Test
                Reports(Merged Files):
              </td>
              <td><input type="file" id="myfile" name="myfile" required /><br /><br /></td>
            </tr>
            <tr>
              <td><input type="submit" name="submit" value="Submit" /></td>
            </tr>
          </table>
        </form>
      </center>
    </div>
  );
}

export default App;
