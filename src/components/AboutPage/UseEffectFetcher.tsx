import { useEffect, useState } from "react";

import axios from "axios";
import "./Fetcher.css";

const UseEffectAxios = () => {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/samerdl/Vet-Community/main/composed.json",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="fetchercss">
      {err && <h2>{err}</h2>}

      {isLoading && <h2>Loading...</h2>}

      {data.data.map((person) => {
        return (
          <div className="testimonyCss" key={person.id}>
            <div className="InfopeopleCSs">
              {" "}
              <h6>
                {person.first_name} {person.last_name}
              </h6>
              <h6 style={{ color: "red" }}>{person.country}</h6>
            </div>
            <img className="peopleImgCss" src={person.avatar}></img>
            <h6 className="storyCSs">{person.story}</h6>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectAxios;

//We used Axios, we could use Fetch and several other commands, but in this beta version we are using Axios
// To fetch from a JSON that the author uplodated to GitHub
