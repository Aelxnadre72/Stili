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
  const [l, setL] = useState(0);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventSize, setEventSize] = useState("");
  const [eventDistance, setEventDistance] = useState("");
  const [eventDifficulty, setEventDifficulty] = useState("1");
  const [eventLocation, setEventLocation] = useState("1");

  const locations = [
    {
      value: "1",
      label: "Trondheim",
    },
    {
      value: "2",
      label: "Oslo",
    },
    {
      value: "3",
      label: "Stavanger",
    },
    {
      value: "4",
      label: "Bergen",
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

  useEffect(() => {
    getEvents().then((r) => {
      const d = r;
      const dl = d.length;
      if (dl === 0) {
        return;
      }
      setL(dl);
      setData(d);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    createEvent();
    window.location.reload(true);
  };

  async function getEvents() {
    try {
      const response = await Axios({
        method: "GET",
        url: "/events/",
        responseType: "json",
      });
      return response.data;
    } catch (error) {
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }

  function createEvent() {
    Axios({
      method: "POST",
      url: "/events/",
      data: {
        eventID: (l + 1).toString(),
        eventName: eventName,
        eventDate: eventDate,
        eventDifficulty: eventDifficulty,
        eventDescription: eventDescription,
        eventLocation: eventLocation,
        eventDistance: eventDistance,
        organizer: null,
        eventSize: eventSize,
      },
    });
  }

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
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={(n) => setEventName(n.target.value)}
                />
                <TextField
                  margin="normal"
                  sx={{ mr: 7 }}
                  id="date"
                  type="date"
                  variant="standard"
                  onChange={(d) => setEventDate(d.target.value)}
                />
                <TextField
                  select
                  size="small"
                  label="Location"
                  margin="normal"
                  sx={{ mr: 7 }}
                  value={eventLocation}
                  onChange={(l) => setEventLocation(l.target.value)}
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
                  select
                  size="small"
                  label="Difficulty"
                  margin="normal"
                  value={eventDifficulty}
                  onChange={(e) => setEventDifficulty(e.target.value)}
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
                  sx={{ mb: 2, mt: -0.5 }}
                  label="Distance"
                  type="number"
                  fullWidth
                  variant="standard"
                  onChange={(d) => setEventDistance(d.target.value)}
                />

                <TextField
                  margin="normal"
                  label="Description"
                  style={{ width: 552 }}
                  multiline
                  type="text"
                  maxRows={4}
                  variant="outlined"
                  onChange={(d) => setEventDescription(d.target.value)}
                />
                <TextField
                  margin="normal"
                  sx={{ mt: -0.5 }}
                  label="Size"
                  type="number"
                  fullWidth
                  variant="standard"
                  onChange={(s) => setEventSize(s.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
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
                .map((a) => {
                  return (
                    <li>
                      <Card
                        eventID={a.eventID}
                        name="card-body"
                        wrapper={"card_picture_wrapper-" + a.eventDifficulty}
                        src={campus}
                        text={a.eventName}
                        label={difficulties[a.eventDifficulty - 1].label}
                        path=""
                        description={a.eventDescription}
                        distance={a.eventDistance + "km"}
                        size={"0/" + a.eventSize}
                        id = {a.eventID}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
