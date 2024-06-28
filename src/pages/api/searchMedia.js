import axios from 'axios'

export default async (req, res) => {
    const { searchQuery } = req.query
    console.log(searchQuery)

    if (!searchQuery) {
        return res.status(400).json({ message: 'Missing search query' })
    }

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?api_key=${
                process.env.TMDB_API_KEY
            }&language=ja-JP&query=${encodeURIComponent(searchQuery)}`,
        )
        return res.status(200).json(response.data)
    } catch (err) {
        console.log('エラー内容は...', err)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
