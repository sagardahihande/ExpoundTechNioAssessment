import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import {
  Email,
  Call,
  Event,
  Search,
  Refresh,
  Person,
  Business,
  ViewList,
  CalendarToday,
  TrendingUp,
  Dashboard as DashboardIcon,
  Add, // Rename the Dashboard icon to avoid conflicts
} from "@mui/icons-material";
import "./Dashboard.css"; // Ensure this CSS file is updated

// Rename the component here from Dashboard to LeadDashboard
const LeadDashboard = () => {
  const [leadInfoTab, setLeadInfoTab] = React.useState(0);
  const [activityTab, setActivityTab] = React.useState(0);

  const handleLeadInfoTabChange = (event, newValue) => {
    setLeadInfoTab(newValue);
  };

  const handleActivityTabChange = (event, newValue) => {
    setActivityTab(newValue);
  };

  return (
    <Box className="dashboard-container">
      {/* Sidebar */}
      <Box className="sidebar">
        <IconButton>
          <DashboardIcon />
        </IconButton>
        <IconButton>
          <Person />
        </IconButton>
        <IconButton>
          <Business />
        </IconButton>
        <IconButton>
          <CalendarToday />
        </IconButton>
        <IconButton>
          <TrendingUp />
        </IconButton>
        <IconButton>
          <ViewList />
        </IconButton>
      </Box>

      {/* Top Navbar */}
      <Box className="main-content">
        <AppBar position="static" className="top-navbar">
          <Toolbar>
            <Typography variant="h6" className="navbar-title">
              Test
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <Refresh />
            </IconButton>
            <Avatar alt="User" src="https://via.placeholder.com/40" />
          </Toolbar>
        </AppBar>

        {/* Header Section */}
        <Box className="header">
          <Box className="breadcrumbs">
            <Typography variant="body2">
              Dashboard / Lead / LE-010071
            </Typography>
          </Box>
        </Box>

        {/* Lead Details & Stage Indicators */}
        <Box className="lead-header">
          <Typography variant="h5">LE-010071</Typography>
          <Button variant="contained" className="convert-button">
            Mark as Converted
          </Button>
        </Box>

        {/* Status Buttons */}
        <Box className="status-buttons">
          <Button className="status-button new">New</Button>
          <Button className="status-button contacted">Contacted</Button>
          <Button className="status-button contacted">Nurturing</Button>
          <Button className="status-button contacted">Qualified</Button>
          <Button className="status-button contacted">Unqualified</Button>
        </Box>

        {/* Main Grid Layout */}
        <Grid container spacing={2} className="lead-activity-history">
          {/* Lead Information */}
          <Grid item xs={4}>
            <Typography variant="h6">Mamta Naik</Typography>
            <Typography variant="body2" color="textSecondary">
              Aniruddh Naidu
            </Typography>

            {/* Pending Actions */}
            <Box className="pending-actions">
              <Button variant="contained" color="success">
                Create Account
              </Button>
              <Button variant="contained">Create Contact</Button>
            </Box>

            {/* Tabs for Lead Information */}
            <Tabs
              value={leadInfoTab}
              onChange={handleLeadInfoTabChange}
              className="lead-info-tabs"
            >
              <Tab label="Basic Details" />
              <Tab label="Account Details" />
              <Tab label="Lead Details" />
              <Tab label="Team" />
              <Tab label="Other Contacts" />
            </Tabs>

            <Box className="lead-info-content">
              {leadInfoTab === 0 && (
                // <Typography>Basic Details Content</Typography>
                <Box>
                  <div class="input-group">
                    <label for="account">Account</label>
                    <select id="account">
                      <option>Select Option</option>
                    </select>
                    <label for="contact">Contact</label>
                    <select id="contact">
                      <option>Select Option</option>
                    </select>
                  </div>
                </Box>
              )}
              {leadInfoTab === 1 && (
                <Typography>Account Details Content</Typography>
              )}
              {leadInfoTab === 2 && (
                <Typography>Lead Details Content</Typography>
              )}
              {leadInfoTab === 3 && <Typography>Team Content</Typography>}
              {leadInfoTab === 4 && (
                <Typography>Other Contacts Content</Typography>
              )}
            </Box>
          </Grid>

          {/* Activity Section */}
          <Grid item xs={4}>
            <Tabs
              value={activityTab}
              onChange={handleActivityTabChange}
              className="activity-tabs"
            >
              <Tab label="Activity" />
              <Tab label="Actionables" />
              <Tab label="Tasks" />
              <Tab label="Note & File" />
            </Tabs>

            <Box className="activity-section">
              {activityTab === 0 && (
                <Box>
                  <Box className="activity-buttons">
                    <Button startIcon={<Call />}>Log a Call</Button>
                    <Button startIcon={<Email />}>Email</Button>
                    <Button startIcon={<Event />}>Event</Button>
                  </Box>
                  <Box className="activity-fields">
                    <FormControl
                      variant="outlined"
                      sx={{ m: 1, width: "35ch" }}
                    >
                      <label className="text-word">Subject</label>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      sx={{ m: 1, width: "35ch" }}
                    >
                      <label className="text-word">Add People</label>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                  </Box>
                  <Box className="activity-fields">
                    <FormControl
                      variant="outlined"
                      sx={{ m: 1, width: "35ch" }}
                    >
                      <label className="text-word">Due Date</label>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                    <FormControl
                      variant="outlined"
                      sx={{ m: 1, width: "35ch" }}
                    >
                      <label className="text-word">Time</label>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </FormControl>
                  </Box>
                  <Box className="activity-fields">
                    <FormControl
                      variant="outlined"
                      sx={{ m: 1, width: "72ch" }}
                    >
                      <label className="text-word">Description</label>
                      <textarea rows="4" className="textarea">
                        Input Text
                      </textarea>
                    </FormControl>
                  </Box>
                  <Box className="activity-fields-last">
                    <IconButton aria-label="delete">
                      <Add />
                    </IconButton>
                    <Button variant="contained" sx={{ marginRight: "20px" }}>
                      Submit
                    </Button>
                  </Box>
                </Box>
              )}
              {activityTab === 1 && (
                <Typography>Actionables Content</Typography>
              )}
              {activityTab === 2 && <Typography>Tasks Content</Typography>}
              {activityTab === 3 && (
                <Typography>Note & File Content</Typography>
              )}
            </Box>
          </Grid>

          {/* Stage History */}
          <Grid item xs={4}>
            <Box className="stage-history">
              <Typography variant="h6">Stage History</Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Created Jiya Gopal"
                    secondary="28/08 Team 09:00 AM"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Assigned to Aniruddh Naidu"
                    secondary="28/08 Team 10:00 AM"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Arrange a Call"
                    secondary="28/08 Event 12:00 PM"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Marked as Contacted"
                    secondary="28/08 Lead 04:00 PM"
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LeadDashboard;
