import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {

    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className="card__container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className = "card__item card__item-infected" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary" variant="body2" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >No of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = "card__item card__item-recoverd" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary" variant="body2" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >No of recoveries of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className = "card__item card__item-death" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5" >
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary" variant="body2" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >No of death of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards
