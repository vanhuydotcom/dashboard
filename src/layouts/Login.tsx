import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { login } from '../redux/action/auth';
import { RootState } from '../redux';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// core components
import GridItem from '../components/Grid/GridItem';
import GridContainer from '../components/Grid/GridContainer';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/CustomButtons/Button';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

import { createStyles, Typography } from '@material-ui/core';
import CardAvatar from '../components/Card/CardAvatar';
import logo from 'assets/img/logo.svg';

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

interface LoginFormInputs {
    account: string
    password: number
}

const schema = yup.object().shape({
    account: yup.string().required('Không được để trống'),
    password: yup.string().required('Không được để trống'),
});

function Login(props: any) {
    let auth = useSelector((state: RootState) => state.auth)
    // if (auth.message === "success") {
    //     <Redirect to="/admin" />
    //     console.log(auth.message)
    // }
    let dispatch = useDispatch()
    const { classes } = props;
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: LoginFormInputs) => {
        dispatch(login(data))
    };
    return (
        <Container maxWidth="md">
            {/* {
                auth.message === "success" ? <Redirect to="/admin/dashboard" /> : <Redirect to="/login" />
            } */}
            <GridContainer alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                <GridItem xs={12} sm={12} md={6}>
                    <Card profile={true}>
                        {/* <CardAvatar profile={true}> */}
                        <a href="#pablo" onClick={e => e.preventDefault()} style={{ marginTop: "30px", marginBottom: "-30px" }}>
                            <img src={logo} alt="..." />
                        </a>
                        {/* </CardAvatar> */}
                        <CardBody profile={true}>
                            <h4 className={classes.cardCategory} style={{ fontWeight: "bold" }}>Space T - Nền tảng Nội thất TOÀN DIỆN</h4>
                            <h6 className={classes.cardTitle}>Cung cấp Giải pháp Nội thất Trọn gói<br></br> từ Thiết kế đến Thi công</h6>
                            <p className={classes.description} style={{ textAlign: "justify" }}>
                                Chúng tôi hiểu rằng, một không gian sống mơ ước là nơi không những phải đẹp mà còn giúp nâng cao chất lượng cuộc sống.<br></br>

                                Sứ mệnh của Space T là giúp kiến tạo không gian sống mơ ước một cách nhanh chóng, dễ dàng và tiết kiệm nhất cho hàng triệu gia chủ Việt.
                            </p>
                            {/* <Button color="primary" round={true}>
                                Follow
                            </Button> */}
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>Space T - Đăng nhập</h4>
                            <p className={classes.cardCategoryWhite}>Xin chào, vui lòng nhập thông tin đăng nhập</p>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        {/* <CustomInput
                                            labelText="Công ty TNHH Space T"
                                            id="company-disabled"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                disabled: true
                                            }} 
                                        />*/}
                                        <TextField
                                            required
                                            id="company-disabled"
                                            label="Công ty TNHH Space T"
                                            fullWidth
                                            margin="dense"
                                            disabled
                                        // {...register('fullname')}
                                        // error={errors.fullname ? true : false}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <TextField
                                            required
                                            id="account"
                                            label="Account"
                                            fullWidth
                                            margin="dense"
                                            {...register('account')}
                                            error={errors.account ? true : false}
                                        />
                                        {/* <Typography variant="inherit" color="textSecondary">
                                            {errors.email?.message}
                                        </Typography> */}
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <TextField
                                            required
                                            id="password"
                                            label="Password"
                                            fullWidth
                                            margin="dense"
                                            {...register('password')}
                                            error={errors.password ? true : false}
                                            type="password"
                                        />
                                        {/* <Typography variant="inherit" color="textSecondary">
                                            {errors.email?.message}
                                        </Typography> */}
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button color="info" type="submit">Login</Button>
                            </CardFooter>
                            {/* {
                                login && login ?
                                    <Typography variant="inherit" color="textSecondary" style={{ textAlign: "right" }}>
                                        {login.message}
                                    </Typography>
                                    :
                                    ""
                            } */}

                        </form>
                    </Card>
                </GridItem>

            </GridContainer>
        </Container>
    );
}

export default withStyles(styles)(Login);
