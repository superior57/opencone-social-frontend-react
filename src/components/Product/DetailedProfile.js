import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles } from "@material-ui/core"
import TagLabel from '../common/TagLabel';
import { blue, red, yellow } from '@material-ui/core/colors';
import { AccessTime, RecentActors } from "@material-ui/icons";
import { Share } from "../../@/icons";
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
    }
}))

const DetailedProfile = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Paper variant="outlined" square className={clsx("p-4 h-100 w-100", classes.root)} >
            <Grid container spacing={1} className="mb-4">
                <Grid item>
                    <TagLabel
                        className="px-3 py-0"
                        size="large"
                        bgColor={yellow[900]}
                        textColor="white"
                        square
                    >
                        VIP
                    </TagLabel>
                </Grid>          
                <Grid item>
                    <TagLabel
                        className="px-3 py-0"
                        size="large"
                        bgColor={red[600]}
                        textColor="white"
                        square
                    >
                        TURBO
                    </TagLabel>
                </Grid>    
                <Grid item>
                    <TagLabel
                        className="px-3 py-0"
                        size="large"
                        bgColor={blue[700]}
                        textColor="white"
                        square
                    >
                        SHOP
                    </TagLabel>
                </Grid> 
                <Grid item>
                    <Typography>
                        <AccessTime />
                        26 minutes ago
                    </Typography>
                </Grid>     
                <Grid item>
                    <Button variant="text" color="primary" size="small" className="text-capitalize">
                        <Share />
                        {t('Share with friends')}                     
                    </Button>                
                </Grid> 
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="textPrimary">
                        مشروع النخيل 19 ( إسكان المنصور )
                        / شقة 180م فاخرة للبيع في منطقة حي النخيل 
                    </Typography> 
                </Grid>
                <Grid item xs={12}>
                    <Typography className="mb-4">
                        <RecentActors />
                        &nbsp;
                        Post ID: 149918283
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    #إسكان_المنصور

                    ترحب شركة اسكان المنصور بزبائنها الكرام لزيارة ارقى وأفخم مشاريعنا الجاهزة للتسليم .

                    ‏ ‏‏مشروع النخيل 19 ( 3 نوم 1 ماستر ) 180 متر مربع

                    الشقق المتبقية:
                    1- الطابق الأول يمين
                    2- الطابق الأول يسار
                    3- الطابق الثاني يمين
                    4- الطابق الثاني يسار

                    ‏ حاضرون معكم بأجمل التصميم الحديثة، و بأروع اطلالة، وفي أرقى مناطق عمان الغربية.
                    يسر إسكان المنصور بادارة المهندس محمد منصور الأعلان عن توقيع اتفاقية تعاون مشتركة مع بنك صفوة
                    الاسلامي بتمويل عملائنا حصراً لغاية 90٪؜ باسعار مر...
                </Grid>
                <Grid item xs={12}>
                    <Button variant="text" color="primary" size="small" className="float-end">
                        Read more
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DetailedProfile;