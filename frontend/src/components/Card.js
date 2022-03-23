import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventSize, setEventSize] = useState("");
  const [eventDistance, setEventDistance] = useState("");
  const [eventDifficulty, setEventDifficulty] = useState("1");
  const [organizer, setOrganizer] = useState("");
  const [eventLocation, setEventLocation] = useState("1");
  const [eventParticipants, setEventParticipants] = useState("");
  const isAdmin = localStorage.getItem("admin");
  const phoneNumber = localStorage.getItem("id");

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
    download();
  }, [data]);

  function download() {
    if (data === null) {
      getEvent().then((response) => {
        setData(response);
      });
    }

    if (eventParticipants === "" && data !== null) {
      setEventParticipants(data[props.eventID - 1].eventParticipants);
    }
  }

  const handleClickOpen = () => {
    setEventName(data[props.eventID - 1].eventName);
    setEventDate(data[props.eventID - 1].eventDate);
    setEventDifficulty(data[props.eventID - 1].eventDifficulty);
    setEventLocation(data[props.eventID - 1].eventLocation);
    setEventDistance(data[props.eventID - 1].eventDistance);
    setEventDescription(data[props.eventID - 1].eventDescription);
    setEventSize(data[props.eventID - 1].eventSize);
    setOrganizer(data[props.eventID - 1].organizer);
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

  async function getEvent() {
    try {
      const response = await Axios({
        method: "GET",
        url: "/events/",
        responseType: "json",
      });
      return response.data;
    } catch (error) {}
  }

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
        eventSize: eventSize,
        eventDistance: eventDistance,
        organizer: organizer,
        eventParticipants: eventParticipants,
      },
    }).then((response) => {
      console.log(response);
    });
  }

  function joinEvent() {
    var numbers = data[props.eventID - 1].eventParticipants;
    if (!numbers.includes(phoneNumber)) {
      numbers = numbers + "," + phoneNumber;
    }
    Axios({
      method: "PUT",
      url: "/events/" + props.eventID + "/",
      data: {
        eventID: props.eventID,
        eventName: data[props.eventID - 1].eventName,
        eventDate: data[props.eventID - 1].eventDate,
        eventDifficulty: data[props.eventID - 1].eventDifficulty,
        eventDescription: data[props.eventID - 1].eventDescription,
        eventLocation: data[props.eventID - 1].eventLocation,
        eventSize: data[props.eventID - 1].eventSize,
        eventDistance: data[props.eventID - 1].eventDistance,
        organizer: data[props.eventID - 1].organizer,
        eventParticipants: numbers,
      },
    }).then((response) => {
      console.log(response);
    });
    window.location.reload(true);
  }

  const adminExist =
    isAdmin === "true" ? (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            id="button"
            variant="contained"
            size="small"
            color="info"
            onClick={handleClickOpen}
          >
            Edit event
          </Button>
          <Button
            id="jbutton"
            variant="contained"
            size="small"
            color="success"
            onClick={joinEvent}
          >
            Join
          </Button>
        </div>
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
              value={eventName}
              onChange={(n) => setEventName(n.target.value)}
            />
            <TextField
              margin="normal"
              sx={{ mr: 7 }}
              id="date"
              type="date"
              variant="standard"
              value={eventDate.slice(0, 10)}
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
              value={eventDistance}
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
              value={eventDescription}
              onChange={(d) => setEventDescription(d.target.value)}
            />
            <TextField
              margin="normal"
              sx={{ mt: -0.5 }}
              label="Size"
              type="number"
              fullWidth
              variant="standard"
              value={eventSize}
              onChange={(s) => setEventSize(s.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    ) : null;

  const checkButton =
    isAdmin === "true" ? null : (
      <div>
        <Button
          id="jbutton"
          variant="contained"
          size="small"
          color="success"
          onClick={joinEvent}
        >
          Join
        </Button>
      </div>
    );

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
            <p className="card_description">{props.location}</p>
            <p className="card_description">{props.description}</p>
            <p className="card_description">{props.distance}</p>
            <p className="card_size">
              {eventParticipants.split(",").length + "/" + props.size}
            </p>
            {adminExist}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {checkButton}
            </div>
          </div>
        </Link>
      </li>
    </div>
  );
}
