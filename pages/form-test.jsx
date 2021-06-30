import React, { useRef } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { Grid, TextField } from "@material-ui/core";
import axios from "axios";

const formTest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICKED");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid container>
          <TextField
            id="firsName"
            label="Your First Name"
            InputLabelProps={{ shrink: true }}
            color="secondary"
            // defaultValue={formState ? isSignUp ? formState.given_name : formState.firstName : ''}
            required
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Your Last Name"
            InputLabelProps={{ shrink: true }}
            color="secondary"
            // defaultValue={formState ? formState.family_name : ''}
            required={true}
          />
        </Grid>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          InputLabelProps={{ shrink: true }}
          color="secondary"
          // required={true}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          type="tel"
          InputLabelProps={{ shrink: true }}
          color="secondary"
          // defaultValue={formState ? formState.phone_number : ''}
          required={true}
        />
        <TextField
          id="birthDate"
          label="Date of Birth"
          type="date"
          defaultValue="yyyy-MM-dd"
          inputProps={{ style: { width: 150, paddingLeft: 5 } }}
          InputLabelProps={{ shrink: true }}
          color="secondary"
          // defaultValue={formState ? formState.birth_date : ''}
          required
        />

        <Grid container>
          <button type="submit">CLICKKKKKK</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default formTest;
