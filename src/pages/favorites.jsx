import AppLayout from '@/components/Layouts/AppLayout'
import MediaCard from '@/components/MediaCard'
import laravelAxios from '@/lib/laravelAxios'
import { Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import useSWR from 'swr'

const favorites = () => {
    const fetcher = async url =>
        await laravelAxios.get(url).then(res => res.data)
    const { data: favoriteItems, error } = useSWR('api/favorites', fetcher)

    const loading = !favoriteItems && !error

    if (error) {
        console.log(error)
        return <div>エラーが発生しました。</div>
    }
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    お気に入り
                </h2>
            }>
            <Head>
                <title>Laravel - Favorites</title>
            </Head>

            <Container>
                {loading ? (
                    <Grid item textAlign={'center'} xs={12}>
                        <Typography>Loading...</Typography>
                    </Grid>
                ) : favoriteItems.length > 0 ? (
                    <Grid container spacing={3} py={3}>
                        {favoriteItems?.map(item => (
                            <MediaCard
                                key={item.id}
                                item={item}
                                isContent={false}
                            />
                        ))}
                    </Grid>
                ) : (
                    <Grid item textAlign={'center'} xs={12}>
                        <Typography>
                            お気に入り登録作品が見つかりませんでした。
                        </Typography>
                    </Grid>
                )}
            </Container>
        </AppLayout>
    )
}

export default favorites
