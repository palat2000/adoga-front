function LoadingPage() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-[1px] z-50">
      <div className="loading loading-dots loading-lg text-primary"></div>
    </div>
  );
}

export default LoadingPage;
