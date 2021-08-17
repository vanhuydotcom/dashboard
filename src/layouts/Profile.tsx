import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux';
import { logout } from '../redux/action/auth';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// core components
import GridItem from '../components/Grid/GridItem';
import GridContainer from '../components/Grid/GridContainer';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

import { createStyles } from '@material-ui/core';
import CardAvatar from '../components/Card/CardAvatar';
import logo from 'assets/img/logo.svg';
import avatar from 'assets/img/faces/default.png'

const styles = createStyles({
    cardCategoryWhite: {
        color: 'rgba(255,255,255,.62)',
        margin: '0',
        fontSize: '14px',
        marginTop: '0',
        marginBottom: '0'
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: 300,
        fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
        marginBottom: '3px',
        textDecoration: 'none'
    }
});

function Profile(props: any) {
    const { classes } = props;
    // let auth = useSelector((state: RootState) => state.auth)x
    let dispatch = useDispatch()
    const [value, setValue] = React.useState('female');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }
    const _click = () => {
        dispatch(logout())
    }
    return (
        <Container maxWidth="md">
            <GridContainer alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                <GridItem xs={12} sm={12} md={5}>
                    <Card profile={true}>
                        <CardAvatar profile={true}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={avatar} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile={true}>
                            <h6 className={classes.cardCategory}>Front End Developer</h6>
                            <h4 className={classes.cardTitle}>Huy Van</h4>
                            <p className={classes.description}>
                                Don't be scared of the truth because we need to restart the
                                human foundation in truth And I love you like Kanye loves Kanye
                                I love Rick Owens’ bed design but the back is...
                            </p>
                            <Button color="info" onClick={_click} >
                                Đăng xuất
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>Space T - Thông Tin Cá Nhân</h4>
                            {/* <p className={classes.cardCategoryWhite}>Xin chào, vui lòng nhập thông tin đăng nhập</p> */}
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Space T"
                                        id="company-disabled"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            disabled: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Tên đăng nhâp"
                                        id="username"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Email"
                                        id="email-address"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                    <CustomInput
                                        labelText="Họ và tên"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                    {/* <CustomInput
                                        labelText="Giới tính"
                                        id="last-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    /> */}
                                    <FormControl component="fieldset">
                                        <FormLabel style={{ padding: "unset", paddingTop: "30px" }}>Giới tính</FormLabel>
                                        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                            <FormControlLabel value="Nam" control={<Radio color="primary" />} label="Nam" />
                                            <FormControlLabel value="Nữ" control={<Radio color="primary" />} label="Nữ" />
                                            <FormControlLabel value="Khác" control={<Radio color="primary" />} label="Khác" />
                                        </RadioGroup>
                                    </FormControl>
                                </GridItem>
                            </GridContainer>
                            {/* <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="City"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Country"
                                        id="country"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Postal Code"
                                        id="postal-code"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                       */}
                        </CardBody>
                        <CardFooter>
                            <Button color="info">Cập nhập</Button>
                        </CardFooter>
                    </Card>
                </GridItem>

            </GridContainer>
        </Container>
    );
}

export default withStyles(styles)(Profile);
