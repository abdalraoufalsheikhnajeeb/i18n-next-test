import React from "react";

interface HistoryItem {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  desc: string;
}

interface HistoryCardProps {
  historyItem: HistoryItem;
  nextHistorySlide?: HistoryItem;
  handleSelectedHistoryCard: (selectedCard: HistoryItem) => void;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ historyItem, nextHistorySlide, handleSelectedHistoryCard }) => {
  return (
    <div className="history-card-wrapper flex flex-col items-center p-4">
      <div className="img-wrapper mb-4">
        <img
          className="histoy-card-img w-full h-auto object-cover"
          src={historyItem.img}
          alt={historyItem.title}
        />
      </div>
      <div className="history-card-timelines-wrapper w-full">
        <div className="history-card-timeline flex items-center mb-4">
          <div className="flex flex-col items-center mr-4">
            <span className="history-card-timeline-rounder w-4 h-4 bg-blue-500 rounded-full mb-2"></span>
            <span className="history-card-timeline-line h-full w-px bg-gray-300"></span>
          </div>
          <div className="history-card-timeline-content">
            <h5 className="font-semibold">{historyItem.subTitle}</h5>
            <h5 className="font-semibold">{historyItem.title}</h5>
            <p>{historyItem.desc}</p>
          </div>
        </div>
        {nextHistorySlide && (
          <div
            className="history-card-timeline flex items-center cursor-pointer"
            onClick={() => handleSelectedHistoryCard(nextHistorySlide)}
          >
            <div className="flex flex-col items-center mr-4">
              <span className="history-card-timeline-rounder w-4 h-4 bg-blue-500 rounded-full mb-2"></span>
              <span className="history-card-timeline-line h-full w-px bg-gray-300"></span>
            </div>
            <div className="history-card-timeline-content">
              <h5 className="font-semibold">
                {nextHistorySlide.subTitle}
              </h5>
              <h5 className="font-semibold">{nextHistorySlide.title}</h5>
              <p>{nextHistorySlide.desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;
