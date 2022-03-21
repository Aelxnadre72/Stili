import React, { useState } from "react";
import "./Cards.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Card(props) {
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    editEvent();
    window.location.reload(true);
  };

  function editEvent() {
    Axios({
      method: "PUT",
      url: "/events/" + props.eventID + "/",
      data: {
        eventID: props.eventID,
        eventName: eventName,
        eventDate: eventDate,
        eventDifficulty: eventDifficulty,
        eventDescription: eventDescription,
        eventLocation: eventLocation,
        eventDistance: eventDistance,
        organizer: null,
        eventSize: eventSize,
      },
    }).then((response) => {
      console.log(response);
    })
  };

  return (
    <div className={props.name}>
      <li className="card">
        <Link
          className="card_link"
          style={{ textDecoration: "none" }}
          to={props.path}
        >
          <figure className={props.wrapper} data-category={props.label}>
            <img src={props.src} alt="test" className="card_image"></img>
          </figure>
          <div className="card_info">
            <p className="card_title">{props.text}</p>
            <p className="card_description">{props.description}</p>
            <p className="card_description">{props.distance}</p>
            <p className="card_size">{props.size}</p>
            <Button
              id="button"
              variant="contained"
              size="small"
              color="success"
              onClick={handleClickOpen}
            >
              Edit event
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
        </Link>
      </li>
    </div>
  );
}
