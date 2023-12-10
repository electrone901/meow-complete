import React from "react";
import { useRouter } from "next/router";
// import { MyContext } from "./_app";
import { Box, Button, Card, Chip, Container, Grid, StylesProvider, Typography } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

function FundraiserDetails() {
  // const { selectedFundraiser } = useContext(MyContext);
  const selectedFundraiser = {
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aphis.usda.gov%2Faphis%2Fpet-travel%2Fdefinition-of-a-pet&psig=AOvVaw2xyMNmlxuEtyBw_hQ9pMIa&ust=1702286432621000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLDF_KPFhIMDFQAAAAAdAAAAABAE",
    category: "category",
    imageType: "imageType",
    title: "This is the title",
    organizer: "0xFF96A324757l0F6DaE2382C2dAD52d6E196a8d14",
    url:
      "https://abc6onyourside.com/resources/media2/16x9/full/1024/center/80/69f6539c-72ef-4443-82fb-df04592f459e-large16x9_GettyImages1124551251.jpg",
    targetAmmount: "500",
    totalDonations: "5",
    description:
      "On top of the daily heartache of the rescue cats themselves, the vets bill is spiraling and becoming an enormous worry for Sue. And that is the one thing we can try and help her with. We need to keep those doors open, for the sake of the cats that really need her help and their chance. We know things are not easy at the moment so we dont have any expectations on anybody, we can only hope that those who can throw a pound or two in our begging bucket- do. Every single pound REALLY does count, because every pound you give is one less to find. Thank you",
  };

  const router = useRouter();

  const donate = () => {
    router.push(`/statusCat`);
  };

  return (
    <StylesProvider injectFirst>
      <Container className="page-community" style={{ minHeight: "70vh", paddingBottom: "1rem" }}>
        <div>
          {selectedFundraiser ? (
            <Box sx={{ width: "100%" }}>
              <br />
              <br />
              <br />
              <p className="title-fundraiser"> {selectedFundraiser.title}</p>
              <br />

              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8}>
                  <img src={selectedFundraiser.url} alt="community" className="foundraiser-img" />
                  <br />
                  <br />

                  <div className="outer">
                    <div className="pr-4">
                      <img src="/assets/profile-icon.png" alt="profileIcon" className="w-16 h-16 rounded-full " />
                    </div>
                    <p>
                      <strong>{`${selectedFundraiser.organizer.substring(32)}...`} </strong>
                      is organizing this fundraiser
                    </p>
                  </div>

                  <br />
                  <hr style={{ border: "1px solid #c8c8c8" }} />
                  <br />
                  <p className="description">{selectedFundraiser.description}</p>
                  <br />
                  <br />
                  <Chip className="profile-chip text-white" label={` Category: Pets`} variant="outlined" />
                  <Chip className="profile-chip text-white" label={` Created at: Dec 01 2024`} variant="outlined" />
                  <Chip className="profile-chip text-white" label={`Fundraiser id: 1`} variant="outlined" />
                  <br />
                  <br />
                  <hr style={{ border: "1px solid #c8c8c8" }} />
                  <br />
                  <br />

                  <p className="title-fundraiser"> Updates</p>
                </Grid>

                <Grid p xs={4} className="grid-rigth-side">
                  <Card
                    style={{
                      padding: "1.5rem",
                      float: "right",
                    }}
                  >
                    <div className="page-wallet-address">
                      <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        ${selectedFundraiser.totalDonations === "0" ? "0.00" : selectedFundraiser.totalDonations}
                        <span
                          style={{
                            fontSize: ".94rem",
                            color: "rgb(90 87 87)",
                            paddingLeft: "0.3rem",
                          }}
                        >
                          raised of $ {selectedFundraiser.targetAmmount}
                        </span>
                      </p>
                      <br />
                      <LinearProgress variant="determinate" value={50} />

                      <p style={{ fontSize: ".9rem", color: "rgb(90 87 87)" }}>30.3K donations</p>
                      <br />

                      <br />

                      <Button
                        style={{
                          width: "100%",
                          background: "linear-gradient(180deg,#ffde9e 50%,#fcb957)",
                          color: "black",
                        }}
                        onClick={donate}
                      >
                        Feed Me
                      </Button>
                      <br />
                      <br />
                      <Button
                        style={{
                          width: "100%",
                          background: "linear-gradient(180deg,#fdb933 35.42%,#f58131 139.58%)",
                          color: "black",
                        }}
                      >
                        Donate NFTs
                      </Button>
                      <br />
                      <br />

                      <img src="/assets/donation.png" alt="profileIcon" className="donation-img" />
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Button variant="contained" color="primary" to="/">
              Refresh
            </Button>
          )}
        </div>
        <br />
        <Typography className="subtitle" color="textPrimary" gutterBottom>
          Updates comming soon...
        </Typography>
        <br /> <br />
      </Container>
    </StylesProvider>
  );
}

export default FundraiserDetails;
