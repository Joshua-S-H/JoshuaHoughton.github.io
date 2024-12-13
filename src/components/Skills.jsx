import "./SkillsStyle.css";

export function Skills() {
  return (
    <>


      <div id="skills" className="skills">
        <h2>Key Skills</h2>
        <table>
          <thead>
            <tr>
              <th>My Key Skills</th>
              <th>Tools I used / Areas of Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Analysis & Visualisation</td>
              <td>MATLAB, Key Python Libraries (pandas, Matplotlib, NumPy, SciPy)</td>
            </tr>
            <tr>
              <td>AI and Machine Learning</td>
              <td>Training Artificial Neural Networks for Regression and Classification, Machine Vision</td>
            </tr>
            <tr>
              <td>Programming</td>
              <td>Python, C#</td>
            </tr>
            <tr>
              <td>Data Bases</td>
              <td>SQL</td>
            </tr>
            <tr>
              <td>Version Control</td>
              <td>Git & GitHub</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
