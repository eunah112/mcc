import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Movieinfo() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const FetchMovies = async () => {
			const options = {
				method: "GET",
				url: "https://api.themoviedb.org/3/movie/popular",
				params: {language: "ko-kr", page: "1"},
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNhNGQyMmVjODk5ZTJhMTZjMTcyY2JkZDlmMDg4MyIsIm5iZiI6MTcyMDY2MTkwMi41MDkyODUsInN1YiI6IjY2OGYzNjNjNGE4NTIyMGFhZWU2ZTQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h77cby9sICrCG41NN3Osp_hm0rMGi2JBgaz_G1aGsBU",
				},
			};
			try {
				const response = await axios.request(options);
				setMovies(response.data.results);
				console.log(response.data.results);
			} catch (error) {
				console.log("api를 불러오지 못했습니다.", error);
			}
		};
		FetchMovies();
	}, []);
	return (
		<>
			<div className='grid grid-cols-4 gap-4 mx-[50px] my-[30px] drop-shadow-2xl'>
				{movies.map((movie) => (
					<div
						className='h-full rounded-[30px]'
						key={movie.id}
					>
						<img
							className='w-[300px] h-[430px]'
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
						/>
						<div className='w-[300px] bg-[#F2F2F2]'>
							<div>{movie.title}</div>
							<div>{movie.release_date}</div>
							<div>{movie.vote_average.toFixed(1)}</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
