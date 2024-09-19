import { useState } from 'react';
import axios from 'axios';

function ProfilePage() {
  const [rateCard, setRateCard] = useState(null);
  const [socialLinks, setSocialLinks] = useState({});

  const handleFileUpload = (e) => {
    setRateCard(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('rate_card', rateCard);
    formData.append('social_media_links', JSON.stringify(socialLinks));

    axios.post('/api/upload', formData)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileUpload} />
      <input type="text" placeholder="Social Media Links" onChange={(e) => setSocialLinks({ ...socialLinks, social: e.target.value })} />
      <button type="submit">Save</button>
    </form>
  );
}

export default ProfilePage;
