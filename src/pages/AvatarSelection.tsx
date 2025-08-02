// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Upload, Check } from "lucide-react";
// import avatar1 from "@/assets/avatar-1.jpg";
// import avatar2 from "@/assets/avatar-2.jpg";
// import avatar3 from "@/assets/avatar-3.jpg";
// import avatar4 from "@/assets/avatar-4.jpg";
// import avatar5 from "@/assets/avatar-5.jpg";
// import avatar6 from "@/assets/avatar-6.jpg";

// const AvatarSelection = () => {
//   const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setUploadedImage(e.target?.result as string);
//         setSelectedAvatar(null);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAvatarSelect = (index: number) => {
//     setSelectedAvatar(index);
//     setUploadedImage(null);
//   };

//   const handleConfirm = () => {
//     // Here you would save the avatar selection
//     navigate("/match-result");
//   };

//   const isSelectionMade = selectedAvatar !== null || uploadedImage !== null;

//   const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

//   return (
//     <div className="min-h-screen gradient-pages py-16">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">
//             Choose Your <span className="text-primary">Avatar</span>
//           </h1>
//           <p className="text-lg text-muted-foreground">
//             Upload your photo or select from our curated collection
//           </p>
//         </div>

//         {/* Upload Section */}
//         <Card className="p-8 mb-8 shadow-card border-2 border-muted hover:border-primary/20 transition-colors">
//           <div className="text-center">
//             <h3 className="text-xl font-semibold mb-4">Upload Your Photo</h3>
            
//             <div className="relative">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//               />
              
//               <div className="border-2 border-dashed border-muted rounded-xl p-8 hover:border-primary/40 transition-colors bg-background-secondary/30">
//                 {uploadedImage ? (
//                   <div className="space-y-4">
//                     <img 
//                       src={uploadedImage} 
//                       alt="Uploaded avatar" 
//                       className="w-32 h-32 rounded-full mx-auto object-cover shadow-card"
//                     />
//                     <div className="flex items-center justify-center gap-2 text-primary">
//                       <Check className="w-5 h-5" />
//                       <span className="font-medium">Photo uploaded</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
//                     <div>
//                       <p className="font-medium text-foreground">Click to upload</p>
//                       <p className="text-sm text-muted-foreground">JPG, PNG up to 5MB</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Card>

//         {/* Default Avatars */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-semibold text-center">
//             Or Choose from Our Collection
//           </h3>
          
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {avatarImages.map((avatarSrc, index) => (
//               <Card
//                 key={index}
//                 className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
//                   selectedAvatar === index
//                     ? "border-4 border-secondary shadow-soft"
//                     : "border-2 border-muted hover:border-primary/30"
//                 }`}
//                 onClick={() => handleAvatarSelect(index)}
//               >
//                 <div className="aspect-square relative">
//                   <img 
//                     src={avatarSrc}
//                     alt={`Avatar option ${index + 1}`}
//                     className="w-full h-full rounded-xl object-cover"
//                   />
                  
//                   {selectedAvatar === index && (
//                     <div className="absolute inset-0 bg-secondary/20 rounded-xl flex items-center justify-center">
//                       <div className="bg-secondary rounded-full p-2">
//                         <Check className="w-6 h-6 text-secondary-foreground" />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Confirm Button */}
//         <div className="text-center mt-12">
//           <Button 
//             variant="hero" 
//             size="lg"
//             onClick={handleConfirm}
//             disabled={!isSelectionMade}
//             className="min-w-48"
//           >
//             Confirm My Avatar
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvatarSelection;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Check } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";
import FindMatch from "./find_match";
const AvatarSelection = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setSelectedAvatar(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarSelect = (index: number) => {
    setSelectedAvatar(index);
    setUploadedImage(null);
  };

  const handleConfirm = () => {
    // Save the avatar selection to localStorage
    if (uploadedImage) {
      localStorage.setItem('userAvatar', JSON.stringify({ type: 'uploaded', data: uploadedImage }));
    } else if (selectedAvatar !== null) {
      localStorage.setItem('userAvatar', JSON.stringify({ type: 'selected', index: selectedAvatar }));
    }
    navigate("/find_match");
  };

  const isSelectionMade = selectedAvatar !== null || uploadedImage !== null;

  const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  return (
    <div className="min-h-screen gradient-pages py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your <span className="text-primary">Avatar</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your photo or select from our curated collection
          </p>
        </div>

        {/* Upload Section */}
        <Card className="p-8 mb-8 shadow-card border-2 border-muted hover:border-primary/20 transition-colors">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Upload Your Photo</h3>
            
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              
              <div className="border-2 border-dashed border-muted rounded-xl p-8 hover:border-primary/40 transition-colors bg-background-secondary/30">
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded avatar" 
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-card"
                    />
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Photo uploaded</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                    <div>
                      <p className="font-medium text-foreground">Click to upload</p>
                      <p className="text-sm text-muted-foreground">JPG, PNG up to 5MB</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Default Avatars */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center">
            Or Choose from Our Collection
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {avatarImages.map((avatarSrc, index) => (
              <Card
                key={index}
                className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedAvatar === index
                    ? "border-4 border-secondary shadow-soft"
                    : "border-2 border-muted hover:border-primary/30"
                }`}
                onClick={() => handleAvatarSelect(index)}
              >
                <div className="aspect-square relative">
                  <img 
                    src={avatarSrc}
                    alt={`Avatar option ${index + 1}`}
                    className="w-full h-full rounded-xl object-cover"
                  />
                  
                  {selectedAvatar === index && (
                    <div className="absolute inset-0 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <div className="bg-secondary rounded-full p-2">
                        <Check className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Confirm Button */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleConfirm}
            disabled={!isSelectionMade}
            className="min-w-48"
          >
            Confirm My Avatar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;