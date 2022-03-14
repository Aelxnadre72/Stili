import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Cards.css";
import campus from "./Campusrunden.jpg";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Cards() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventSize, setEventSize] = useState("");
  const [eventDistance, setEventDistance] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [location, setLocation] = useState("Trondheim");

  const locations = [
    {
      value: "Trondheim",
      label: "Trondheim",
    },
    {
      value: "Oslo",
      label: "Oslo",
    },
    {
      value: "Bergen",
      label: "Bergen",
    },
    {
      value: "Stavanger",
      label: "Stavanger",
    },
  ];

  const difficulties = [
    {
      value: "1",
      label: "Easy",
    },
    {
      value: "2",
      label: "Mediocre",
    },
    {
      value: "3",
      label: "Veteran",
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    Axios({
      method: "GET",
      url: "/events/",
      responseType: "json",
    })
      .then((response) => {
        const events = response.data;
        if (data.length === 0) {
          setData(events);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  });

  return (
    <div className="all">
      <div className="search-box"></div>
      <div className="cards">
        <div className="card_container">
          <div className="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <Button
              id="button"
              variant="contained"
              size="small"
              color="success"
              onClick={handleClickOpen}
            >
              Create Event
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Event</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="normal"
                  id="name"
                  label="Name"
                  type="name"
                  fullWidth
                  variant="standard"
                  onChange={(n) => setEventName(n.target.value)}
                />
                <TextField
                  margin="normal"
                  id="date"
                  type="date"
                  variant="standard"
                  onChange={(d) => setEventDate(d.target.value)}
                />
                <TextField
                  id="location"
                  select
                  size="small"
                  label="Location"
                  margin="normal"
                  value={location}
                  onChange={(l) => setLocation(l.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {locations.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="difficulty"
                  select
                  size="small"
                  label="Difficulty"
                  margin="normal"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {difficulties.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  margin="normal"
                  id="distance"
                  label="Distance"
                  fullWidth
                  variant="standard"
                  onChange={(d) => setEventDistance(d.target.value)}
                />
                
                <TextField
                  margin="normal"
                  id="description"
                  label="Description"
                  style={{ width: 552 }}
                  multiline
                  maxRows={4}
                  variant="outlined"
                  onChange={(d) => setEventDescription(d.target.value)}
                />
                <TextField
                  margin="normal"
                  id="size"
                  label="Size"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="card_wrapper">
            <ul className="card_items">
              {data
                .filter((val) => {
                  if (
                    q === "" ||
                    (q.length > 0 &&
                      val.eventName.toLowerCase().includes(q.toLowerCase()))
                  ) {
                    return val;
                  }
                })
                .map((a, key) => {
                  return (
                    <div key={key}>
                      <Card
                        name="card-body"
                        wrapper={"card_picture_wrapper-" + a.eventDifficulty}
                        src={campus}
                        text={a.eventName}
                        label={a.eventDifficulty}
                        path=""
                        size={"0/" + a.eventSize}
                      />
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
