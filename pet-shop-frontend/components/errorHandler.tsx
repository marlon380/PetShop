import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";

function ErrorHandler(message: string) {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h2 className="section-title">Ocorreu um erro</h2>
      <p className="text-customYellow">{message}</p>
      <SentimentDissatisfied className="w-32 h-16" />
    </div>
  );
}

export default ErrorHandler;
