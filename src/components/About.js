import { Suspense } from "react"

export const About = () => {
  return (
    <Suspense fallback={<span className='text-white'>Loading...</span>}>
      <div className="text-white p-6 space-y-10">
        <h2 className="text-center font-bold text-lg">This is a movie description web app</h2>
        <div className="space-y-3">
          For this task, you need to create a react project that will use an API to display the movie data in the UI using react.<br/>
            <h2>You are free to use any UI library you want for it, the UI does not have to be too fancy, just make something presentable.</h2>
          <h2>UI has to be responsive.</h2>
          <h2>When the page loads, you need to display the list of popular movies in the UI.</h2>
          <h2>You can get the list from this API - https://movie-task.vercel.app/api/popular?page=1</h2>
          <h2>You need to show the movies in the UI as a grid of cards.</h2>
          <h2>You need to show the movies in the UI as a grid of cards.</h2>
          <h2>Create a search functionality where you can search for a movie and display the movies that you get from the api.</h2>
          <h2>You can use this api route for the search functionality -  https://movie-task.vercel.app/api/search?page=1&query=Avengers</h2>
          <h2>You don't have to worry about the pagination so just set it to 1.</h2>
          <h2>Use react router and have another route for the individual movie page instead of modal.</h2>
          <h2>Add Pagination.</h2>
          
          For this you have to use this api to get the details of an individual movie - https://movie-task.vercel.app/api/movie?movieId=634649
<br/>
          Host the project and get back to us with the link to the project as well as a link to the github.
        </div>
      </div>
    </Suspense>
  )
}
